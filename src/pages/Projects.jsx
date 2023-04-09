import pr from '../assets/images/projects/pr.jpeg'
const ProjectsPage = () => {
    return (
        <>
            <section className="projects-main">
                <h1 className="title">
                    My style
                </h1>
                <img className="projects-img" src={pr} alt="img" />
            </section>

            <section className="projects-about">
                <h2 className="title">
                    About my projects
                </h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eligendi quaerat consectetur commodi
                    facilis aliquid aspernatur rerum inventore, quibusdam sapiente ad at repellendus tenetur excepturi
                    aut, quae expedita voluptatem enim, voluptatibus quasi a quia? Necessitatibus ducimus nemo aliquid
                    sunt nihil voluptate animi quas! Aliquam sequi eaque praesentium dignissimos alias culpa!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repudiandae mollitia exercitationem
                    aperiam nostrum quia.
                </p>
            </section>

            <section className="projects-fonts">
                <h2 className="title">
                    Typography
                </h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum fugiat voluptatum unde. Corporis
                    obcaecati iusto, dolorem assumenda aperiam ab inventore voluptas voluptate in tenetur laboriosam
                    perspiciatis repellat, officiis error architecto deserunt aliquam. Atque optio ducimus repudiandae
                    quidem odit impedit minus corporis non, officiis illo nihil laudantium assumenda perferendis et nam?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure nemo enim non nisi nulla!
                </p>
                <img className="projects-img" src={pr} alt="img" />
            </section>
        </>
    )
}
export default ProjectsPage