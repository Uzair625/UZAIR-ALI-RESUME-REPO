'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Torus knot (tech ring) ──────────────────────────
    const torusGeo = new THREE.TorusKnotGeometry(1.4, 0.35, 120, 18, 2, 3)
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00dcb4,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    scene.add(torus)

    // ── Inner solid torus (glow core) ──────────────────
    const innerGeo = new THREE.TorusKnotGeometry(1.4, 0.32, 80, 12, 2, 3)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00b8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    })
    const inner = new THREE.Mesh(innerGeo, innerMat)
    scene.add(inner)

    // ── Particle cloud ──────────────────────────────────
    const particleCount = 280
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.2 + Math.random() * 1.8
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x00dcb4,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // ── Orbiting tech spheres ───────────────────────────
    const orbits: { mesh: THREE.Mesh; speed: number; radius: number; offset: number; axis: THREE.Vector3 }[] = []
    const colors = [0x00dcb4, 0x00b8ff, 0xffb700, 0xff4d6d]
    for (let i = 0; i < 6; i++) {
      const geo = new THREE.SphereGeometry(0.07, 8, 8)
      const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 0.8 })
      const mesh = new THREE.Mesh(geo, mat)
      scene.add(mesh)
      orbits.push({
        mesh,
        speed: 0.4 + Math.random() * 0.6,
        radius: 2.0 + Math.random() * 0.8,
        offset: (i / 6) * Math.PI * 2,
        axis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5,
        ).normalize(),
      })
    }

    // ── Mouse parallax ──────────────────────────────────
    let mouseX = 0, mouseY = 0
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.6
    }
    window.addEventListener('mousemove', handleMouse)

    // ── Resize handler ──────────────────────────────────
    const handleResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // ── Animation loop ──────────────────────────────────
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      torus.rotation.x = t * 0.12 + mouseY * 0.5
      torus.rotation.y = t * 0.18 + mouseX * 0.5
      inner.rotation.x = -t * 0.09 + mouseY * 0.3
      inner.rotation.y = -t * 0.14 + mouseX * 0.3
      particles.rotation.y = t * 0.04

      // Orbiting spheres
      orbits.forEach((o) => {
        const angle = t * o.speed + o.offset
        const q = new THREE.Quaternion().setFromAxisAngle(o.axis, angle)
        const base = new THREE.Vector3(o.radius, 0, 0)
        base.applyQuaternion(q)
        o.mesh.position.copy(base)
      })

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
