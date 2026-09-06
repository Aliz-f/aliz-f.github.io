(() => {
  const list = document.getElementById("project-list");
  const projects = Array.isArray(window.trainingProjects) ? window.trainingProjects : [];
  let count = 0;

  for (const project of projects) {
    if (!project || typeof project.title !== "string" || !project.title.trim()) continue;
    let url;
    try {
      url = new URL(project.url);
      if (!["https:", "http:"].includes(url.protocol)) continue;
    } catch {
      continue;
    }

    count += 1;
    const card = document.createElement("article");
    card.className = "project-card";
    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = String(count).padStart(2, "0");
    number.setAttribute("aria-hidden", "true");
    const title = document.createElement("h3");
    title.textContent = project.title;
    card.append(number, title);

    if (typeof project.description === "string" && project.description.trim()) {
      const description = document.createElement("p");
      description.className = "description";
      description.textContent = project.description;
      card.append(description);
    }

    if (Array.isArray(project.tags) && project.tags.some(tag => typeof tag === "string" && tag.trim())) {
      const tags = document.createElement("ul");
      tags.className = "tags";
      tags.setAttribute("aria-label", "Project topics");
      for (const tag of project.tags) {
        if (typeof tag !== "string" || !tag.trim()) continue;
        const item = document.createElement("li");
        item.textContent = tag;
        tags.append(item);
      }
      card.append(tags);
    }

    const link = document.createElement("a");
    link.className = "live-link";
    link.href = url.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View live project ↗";
    link.setAttribute("aria-label", `View ${project.title} live (opens in a new tab)`);
    card.append(link);
    list.append(card);
  }

  const counter = document.getElementById("project-count");
  counter.textContent = `${count} ${count === 1 ? "project" : "projects"}`;
  counter.hidden = false;
  document.getElementById("empty-state").hidden = count !== 0;
})();
