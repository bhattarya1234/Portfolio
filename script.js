import { no_of_skills, about_me , email, addr, country, phoneNo} from "./variables.js";

// renamed class param to className to avoid JS reserved word
const heading = (text, id, hN, color, className) => {
  const heading = document.createElement(hN);
  heading.innerHTML = text;
  if (id) heading.id = id;
  if (className) heading.classList.add(className);
  heading.style.color = color || "rgb(167, 52, 52)";
  document.body.appendChild(heading);
};

// universal cleanup
const oldRemove = () => {
  const ids = ["skillContainer", "techStack", "ContactUs", "text"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
  document
    .querySelectorAll(".infoDiv, .detailsInfo")
    .forEach((el) => el.remove());
};

const skills = () => {
  document.getElementById("container").style.display = "none";
  oldRemove();

  heading("Tech Stack", "techStack", "h1");

  const skillContainer = document.createElement("div");
  skillContainer.classList.add("skillContainer");
  skillContainer.id = "skillContainer";
  document.body.appendChild(skillContainer);

  for (let i = 1; i < no_of_skills; i++) {
    const img = document.createElement("img");
    img.src = `./images/${i}.svg`;
    img.classList.add("techStack");
    skillContainer.appendChild(img);
  }
};

const About = () => {
oldRemove()
  const container = document.getElementById("container");
  container.style.display = "block";
  container.innerHTML = about_me;
};

const contact = () => {
  oldRemove();

  document.getElementById("container").style.display = "none";

  heading("Contact Us", "ContactUs", "h1");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");
  infoDiv.style = `
    font-family: Arial, sans-serif;
    line-height: 1.2;
    margin: 16px 0;
    color: grey;
    font-size: 50px;
  `;
  infoDiv.innerHTML = `
    <div style="font-size:12px; text-transform:uppercase;">Dhangadhi</div>
    <div style="font-size:18px; font-weight:700; text-transform:uppercase; margin-top:4px;">Aarya Bhatt</div>
    <div style="margin-top:6px; font-size:14px;">${addr}</div>
    <div style="font-size:14px;">${country}</div>
    <div style="margin-top:8px; font-size:14px;">+${phoneNo}</div>
    <div style="font-size:14px;">${email}</div>
    <br>
    <hr width="50%">
  `;
  document.body.appendChild(infoDiv);

  const Contacts = document.createElement("div");
  Contacts.classList.add("ContactsContainer");
  document.body.appendChild(Contacts);

  heading(
    `Do you want to <u>start a project</u>,<br>
     <u>join the team</u> or just say hi?<br>
     We'd love to hear from you.`,
    "text",
    "h2",
    "grey",
    "detailsInfo"
  );
};

document.addEventListener("DOMContentLoaded", () => {
  window.skills = skills;
  window.About = About;
  window.contact = contact;
});
