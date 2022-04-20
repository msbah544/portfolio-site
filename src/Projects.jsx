const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p className="text">
        <b>
          Below are screen shots of some of the projects I've been working on
          recently:
        </b>
      </p>
      <span className="text">
        <b>
          currency converter; holiday finder; metric units converter; dictionary
          and a todo app respectively.
        </b>
      </span>

      <p className="text">
        <b className="note">
          Source code of my projects can be found on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/msbah544"
          >
            my github profile
          </a>
          .
        </b>
      </p>
      <div className="screen-shots">
        <img
          className="currency-img"
          src="./images/currency4.png"
          alt="currency-converter"
        />
        <img src="./images/holiday.png" alt="holiday-finder" />
        <img
          className="metric-img"
          src="./images/metric.png"
          alt="metric-units-converter"
        />
        <img src="./images/dictionary.png" alt="dictionary" />
        <img src="./images/todo.png" alt="todo" />
      </div>
    </div>
  );
};

export default Projects;
