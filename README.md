# hub.iotkit.in

Open infrastructure for makers — Free subdomains for IoT projects.

Deploy dashboards, APIs, hardware panels, and prototypes using hub.iotkit.in. A clean public home for student builds, ESP32 apps, Raspberry Pi projects, MQTT dashboards, and open source hardware demos.

## Get Started

- Fork the repository
- Add a record in `cname.js` (see example below)
- Create a Pull Request
- Wait for review and approval

## How It Works

1. Fork Repository — Start from the public repository and keep the process open source from day one.
2. Add record in `cname.js` — Map your subdomain to a dashboard, hosting target, or hardware demo endpoint.
3. Create Pull Request — Submit your project with a working preview and a short description of the build.
4. Approval Process — We review for project quality, IoT relevance, and abuse policy compliance.
5. Your subdomain goes live — After approval, your project is published at a clean public address.

### Example `cname.js`

```js
{
	subdomain: "weatherstation",
	type: "CNAME",
	value: "my-project.vercel.app"
}
```

## Featured Projects

- Smart Irrigation — ESP32 dashboard for moisture monitoring, irrigation automation, and alerts. (ESP32, MQTT, Next.js)
- Air Quality Monitor — Realtime sensor panel with trend charts and low-latency telemetry updates. (Raspberry Pi, WebSocket, Tailwind)
- GPS Tracker — Track a field device, visualize movement, and share a live status page. (Node-RED, Mapbox, MQTT)
- Home Automation — Glassy control room for fans, lights, scenes, and remote switching. (ESP32, Web UI, API Keys)

## Latest Blogs

- How to Deploy an ESP32 Dashboard — A practical workflow for shipping a public device panel with a clean domain.
- MQTT for Student Projects — A simple guide to build realtime telemetry demos that feel production ready.
- Raspberry Pi Realtime Panels — Turn a Raspberry Pi into a polished operations dashboard with live metrics.

## Why We Started

Supporting open-source IoT builders with free infrastructure and public reach. hub.iotkit.in exists for students, startups, robotics clubs, makerspaces, and teams that need a trustworthy home for public IoT projects without the overhead of managing everything alone.

## Community Stats

- Active Projects: 128
- Contributors: 54
- Domains Issued: 1,240
<!-- Open Source PRs: 386 -->

## Community Badges

- Verified Project
- Student Builder
- Open Source Contributor
- Hackathon Winner

---

This repository powers the static marketing site and content for hub.iotkit.in. Use `npm run dev` (or `bun dev`) to run locally and `npm run build` / `bun build` then `bun run export` to generate the static `out/` folder used by the GitHub Pages workflow.
