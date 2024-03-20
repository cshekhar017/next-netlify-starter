
async function getProjects() {
  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  });
  const projects = await res.json();

  return projects;
}

export default async function Home() {
  const projects = await getProjects();
  return (
    <ul>
      {projects.products.map((project) => (
        <li key={project.id}>
          {project.title}
        </li>
      ))}
    </ul>
  );
}
