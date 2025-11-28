const sections = [ "about", "skills", "qualification", "projects", "experiences", "contact"];

sections.forEach(section => {
  const container = document.getElementById(section);
  if(container) {
    fetch(`sections/${section}.html`)
      .then(res => res.text())
      .then(html => {
        container.innerHTML = html;
      });
  }
});
