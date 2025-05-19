"use client"

import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  originalX: number
  originalY: number
  phase: number
  amplitude: number
  frequency: number
  isNew?: boolean
  createdAt?: number
}

interface Edge {
  from: number
  to: number
  isNew?: boolean
  createdAt?: number
}

export default function NetworkGraph({ children }: any) {
  const theme = useSelector((state: any) => state.theme.theme.isDark)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const nodesRef = useRef<Node[]>([])
  const edgesRef = useRef<Edge[]>([])
  const animationRef = useRef<number>(0)
  const timeRef = useRef(0)
  const lastActivityTimeRef = useRef(0)
  const mouseActiveRef = useRef(false)
  const isMouseInCanvasRef = useRef(false)
  const isInitializedRef = useRef(false)
  const lastNodeCreationTimeRef = useRef(0)
  const prevMousePositionRef = useRef({ x: 0, y: 0 })

  // Initialize canvas dimensions
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width
        canvas.height = rect.height

        // Only initialize nodes and edges if not already done
        if (!isInitializedRef.current) {
          initializeNodesAndEdges(rect.width, rect.height)
          isInitializedRef.current = true
        }
      }
    }

    // Call immediately and add listener
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Function to initialize nodes and edges
  const initializeNodesAndEdges = (width: number, height: number) => {
    // Create nodes
    const newNodes: Node[] = []
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      newNodes.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        originalX: x,
        originalY: y,
        // Add properties for default animation
        phase: Math.random() * Math.PI * 2, // Random starting phase
        amplitude: 0.5 + Math.random() * 1.5, // Random amplitude for movement
        frequency: 0.2 + Math.random() * 0.3, // Random frequency for movement
      })
    }
    nodesRef.current = newNodes

    // Create edges (connections between nodes)
    const newEdges: Edge[] = []
    for (let i = 0; i < newNodes.length; i++) {
      // Connect each node to 2-3 other nodes
      const numConnections = Math.floor(Math.random() * 2) + 2
      for (let j = 0; j < numConnections; j++) {
        const toNode = Math.floor(Math.random() * newNodes.length)
        if (i !== toNode) {
          newEdges.push({ from: i, to: toNode })
        }
      }
    }
    edgesRef.current = newEdges
  }

  // Function to create a new node at mouse position
  const createNodeAtMouse = (x: number, y: number) => {
    const now = Date.now()

    // Limit node creation rate (one node per 300ms)
    if (now - lastNodeCreationTimeRef.current < 300) {
      return
    }

    // Limit total nodes to prevent performance issues (max 150 nodes)
    if (nodesRef.current.length >= 150) {
      // Remove oldest new node if we're at the limit
      const oldestNewNodeIndex = nodesRef.current.findIndex((node) => node.isNew)
      if (oldestNewNodeIndex !== -1) {
        // Remove edges connected to this node
        edgesRef.current = edgesRef.current.filter(
          (edge) => edge.from !== oldestNewNodeIndex && edge.to !== oldestNewNodeIndex,
        )

        // Remove the node
        nodesRef.current.splice(oldestNewNodeIndex, 1)

        // Update edge indices to account for the removed node
        edgesRef.current = edgesRef.current.map((edge) => {
          return {
            from: edge.from > oldestNewNodeIndex ? edge.from - 1 : edge.from,
            to: edge.to > oldestNewNodeIndex ? edge.to - 1 : edge.to,
            isNew: edge.isNew,
            createdAt: edge.createdAt,
          }
        })
      }
    }

    // Create new node
    const newNode: Node = {
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 2 + Math.random() * 2, // Slightly larger for visibility
      originalX: x,
      originalY: y,
      phase: Math.random() * Math.PI * 2,
      amplitude: 0.5 + Math.random() * 1.5,
      frequency: 0.2 + Math.random() * 0.3,
      isNew: true,
      createdAt: now,
    }

    // Add to nodes array
    const newNodeIndex = nodesRef.current.length
    nodesRef.current.push(newNode)

    // Connect to nearest nodes (3-5 connections)
    const numConnections = 3 + Math.floor(Math.random() * 3)

    // Calculate distances to all existing nodes
    const distances: { index: number; distance: number }[] = nodesRef.current
      .map((node, index) => {
        if (index === newNodeIndex) return { index, distance: Number.POSITIVE_INFINITY } // Skip self
        const dx = node.x - x
        const dy = node.y - y
        return { index, distance: Math.sqrt(dx * dx + dy * dy) }
      })
      .filter((d) => d.distance !== Number.POSITIVE_INFINITY)

    // Sort by distance
    distances.sort((a, b) => a.distance - b.distance)

    // Connect to closest nodes
    for (let i = 0; i < Math.min(numConnections, distances.length); i++) {
      edgesRef.current.push({
        from: newNodeIndex,
        to: distances[i].index,
        isNew: true,
        createdAt: now,
      })
    }

    lastNodeCreationTimeRef.current = now
  }

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Check if mouse has moved significantly
        const prevX = prevMousePositionRef.current.x
        const prevY = prevMousePositionRef.current.y
        const dx = mouseX - prevX
        const dy = mouseY - prevY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Only create nodes if mouse moved significantly (>10px)
        if (distance > 10) {
          createNodeAtMouse(mouseX, mouseY)
          prevMousePositionRef.current = { x: mouseX, y: mouseY }
        }

        setMousePosition({ x: mouseX, y: mouseY })
        lastActivityTimeRef.current = Date.now()
        mouseActiveRef.current = true
      }
    }

    const handleMouseEnter = () => {
      isMouseInCanvasRef.current = true
    }

    const handleMouseLeave = () => {
      isMouseInCanvasRef.current = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    canvasRef.current?.addEventListener("mouseenter", handleMouseEnter)
    canvasRef.current?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      canvasRef.current?.removeEventListener("mouseenter", handleMouseEnter)
      canvasRef.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Check for mouse inactivity
  useEffect(() => {
    const checkInactivity = () => {
      const now = Date.now()
      if (now - lastActivityTimeRef.current > 2000) {
        // 2 seconds of inactivity
        mouseActiveRef.current = false
      }
    }

    const interval = setInterval(checkInactivity, 1000)
    return () => clearInterval(interval)
  }, [])

  // Update when theme changes
  useEffect(() => {
    if (canvasRef.current && isInitializedRef.current) {
      // Force a redraw when theme changes
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [theme])

  // Animation loop - start immediately after component mounts
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      // Skip animation if nodes aren't initialized yet
      if (nodesRef.current.length === 0) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      timeRef.current += 0.01 // Increment time for animations
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nodes = nodesRef.current
      const edges = edgesRef.current
      const now = Date.now()

      // Update and draw edges
      ctx.lineWidth = 0.5

      edges.forEach((edge) => {
        const fromNode = nodes[edge.from]
        const toNode = nodes[edge.to]

        if (!fromNode || !toNode) return // Skip if nodes don't exist

        // Calculate distance to mouse
        const midX = (fromNode.x + toNode.x) / 2
        const midY = (fromNode.y + toNode.y) / 2
        const distToMouse = Math.sqrt(Math.pow(midX - mousePosition.x, 2) + Math.pow(midY - mousePosition.y, 2))

        // Make lines more visible when mouse is near
        let opacity = Math.min(0.2, 30 / distToMouse)

        // Highlight new edges
        if (edge.isNew) {
          const age = now - (edge.createdAt || 0)
          if (age < 1000) {
            // Fade in new edges
            opacity = Math.min(0.5, opacity + (0.5 * (1000 - age)) / 1000)
            ctx.lineWidth = 1
          }
        }

        ctx.beginPath()
        ctx.strokeStyle = theme ? `rgba(255, 255, 255, ${opacity})` : `rgba(100, 100, 100, ${opacity})`
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.stroke()
        ctx.lineWidth = 0.5
      })

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Boundary forces
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        if (isMouseInCanvasRef.current && mouseActiveRef.current) {
          // Mouse attraction - nodes follow the mouse
          const distToMouse = Math.sqrt(Math.pow(node.x - mousePosition.x, 2) + Math.pow(node.y - mousePosition.y, 2))

          if (distToMouse < 200) {
            // Calculate direction vector from node to mouse (attraction)
            const dirX = mousePosition.x - node.x
            const dirY = mousePosition.y - node.y

            // Normalize and apply force
            const length = Math.sqrt(dirX * dirX + dirY * dirY)
            if (length > 0) {
              const forceStrength = 0.05 * (1 - distToMouse / 200)
              node.vx += (dirX / length) * forceStrength
              node.vy += (dirY / length) * forceStrength
            }
          }
        } else {
          // Default animation when no mouse activity
          // Calculate new target position based on sine waves
          const targetX = node.originalX + Math.sin(timeRef.current * node.frequency + node.phase) * node.amplitude * 10
          const targetY = node.originalY + Math.cos(timeRef.current * node.frequency + node.phase) * node.amplitude * 10

          // Move towards the target position
          const dirX = targetX - node.x
          const dirY = targetY - node.y
          node.vx += dirX * 0.02
          node.vy += dirY * 0.02
        }

        // Apply velocity with damping
        node.vx *= 0.95
        node.vy *= 0.95
        node.x += node.vx
        node.y += node.vy

        // Draw the node
        ctx.beginPath()

        // Highlight new nodes
        if (node.isNew) {
          const age = now - (node.createdAt || 0)
          if (age < 1000) {
            // New nodes are highlighted
            // ctx.fillStyle = `rgba(255, 165, 0, ${0.7 + (0.3 * (1000 - age)) / 1000})`
            ctx.fillStyle = `rgba(153, 27, 27, ${0.7 + (0.3 * (1000 - age)) / 1000})`
            ctx.arc(node.x, node.y, node.radius * (1 + (0.5 * (1000 - age)) / 1000), 0, Math.PI * 2)
          } else {
            // After 1 second, transition to normal
            ctx.fillStyle = theme ? "rgba(255, 255, 255, 0.8)" : "rgba(100, 100, 100, 0.8)"
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
          }
        } else {
          // Normal nodes
          ctx.fillStyle = theme ? "rgba(255, 255, 255, 0.8)" : "rgba(100, 100, 100, 0.8)"
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        }

        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation immediately
    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition, theme]) // Added theme to dependencies to ensure it updates

  return (
    <div className=" w-screen overflow-hidden " >
      <div className="relative w-full h-150 md:min-h-screen hover:scale-110 transition-transform duration-2000 ease-in-out ">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-ful"  />
        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center ">{children}</div>
      </div>
    </div>
  )
}
