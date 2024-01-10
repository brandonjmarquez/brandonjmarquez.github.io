const Resume = (props) => {
  return (
    <section id={(props.isCopy) ? "resume-cp" : "resume"} className="w-full h-max">
      <div id="resume-pdf" className="flex flex-col w-[80vw] h-[80vh]">
        <iframe src={import.meta.env.VITE_RESUME_EMBED} className="flex-1 border-none m-0 p-0"></iframe>
        <a href={import.meta.env.VITE_RESUME_URL} target="_blank" className="resume-link">Link to my resume.</a>
      </div>
    </section>
  )
}

export default Resume;