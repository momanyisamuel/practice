const moonPath =
  "M52 103.5C52 160.662 103.5 207 103.5 207C46.3385 207 0 160.662 0 103.5C0 46.3386 46.3385 1.52588e-05 103.5 1.52588e-05C103.5 1.52588e-05 52 46.3386 52 103.5Z";
const sunPath =
  "M207 103.5C207 160.661 160.661 207 103.5 207C46.3385 207 0 160.661 0 103.5C0 46.3385 46.3385 0 103.5 0C160.661 0 207 46.3385 207 103.5Z";
const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });

  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(199, 199, 199)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
      },
      "-=700"
    );
  toggle = !toggle;
});
