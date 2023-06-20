import "./index.css"

const Home = () => {
    return(
        <>
            <div className="main-container">
                <div className="left-container">
                    <h1 className="company-name">Genesis</h1>
                    <p className="tagline">ATS</p>
                    <p className="side-sub-headings">Home</p>
                    <p className="side-sub-headings">Job Postings</p>
                    <p className="side-sub-headings">Applications</p>
                    <p className="side-sub-headings">Clients</p>
                    <p className="side-sub-headings">Vendors</p>
                    <p className="side-sub-headings">Talent Bench</p>
                    <p className="side-sub-headings">Job Template</p>
                    <p className="side-sub-headings">Job Requistion</p>
                </div>

                <div className="card-container">
                    <div className="top-header-container">
                        <div className="top-container">
                            <p className="top-container-parameters">Advanced Search</p>
                            <p className="top-container-parameters">Create JobPosting</p>
                            <p className="top-container-parameters">Create JobTemplate</p>
                            <p className="top-container-parameters">Create an Application</p>
                            <p className="top-container-parameters">Integrated Search</p>
                        </div>
                        <div className="right-icons-container">
                            <i className="fa-solid fa-magnifying-glass" style={{color: "#7860db",width:"20px"}}></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="center-container">
                        <div className="header-center-container">
                            <p className="side-heading">Recruitment Summary</p>
                            <p className="side-heading">Bench Summary</p>
                            <div className="select-time-container">
                                <p className="select-time-paragraph">This Week</p>
                            </div>
                            <div className="select-time-container">
                                <p className="select-time-paragraph">Search User</p>
                            </div>
                        </div>
                        <hr className="horizontal-line" />
                    </div>
                    <div className="middle-container">
                        <div className="middle-first-container">
                            <div className="middle-first-container-header">
                                <h1 className="side-heading">Recruitment Activity</h1>
                                <div className="select-time-container">
                                    <p className="select-time-paragraph">This Week</p>
                                </div>
                            </div>
                            <hr className="horizontal-line-2" />
                            <p className="options">Applications</p>
                            <p className="options">Active Jobs</p>
                            <p className="options">Submissions</p>
                            <p className="options">Client Submissions</p>
                            <p className="options">No Show</p>
                            <p className="options">Interviews</p>
                            <p className="options">Feedback</p>
                            <p className="options">Placements</p>
                        </div>

                        <div className="middle-first-container">
                            <div className="middle-first-container-header">
                                <h1 className="side-heading">Recruitment Activity</h1>
                                <div className="select-time-container">
                                    <p className="select-time-paragraph">This Week</p>
                                </div>
                            </div>
                            <hr className="horizontal-line-2" />
                            <p className="options">Active Bench</p>
                            <p className="options">Vendor Submissions</p>
                            <p className="options">Requirement Submission</p>
                            <p className="options">Interviews</p>
                            <p className="options">No Show</p>
                            <p className="options">Assigned Bench</p>
                            <p className="options">Jobbroad Submissions</p>
                            <p className="options">Placements</p>
                        </div>

                        <div className="middle-first-container">
                            <div className="middle-first-container-header">
                                <h1 className="side-heading">Bench Approvals</h1>
                                <h1 className="side-heading">Pending Requistion</h1>
                            </div>
                            <hr className="horizontal-line-2" />
                        </div>
                    </div>
                    
                    <div className="lower-container">
                        <div className="middle-first-container">
                            <div className="middle-first-container-header">
                                <h1 className="side-heading">Interviews</h1>
                                <h1 className="side-heading">Job Starting</h1>
                                <h1 className="side-heading">Tasks</h1>
                            </div>
                            <hr className="horizontal-line-2" />
                            <p className="content-container">No records found</p>
                        </div>

                        <div className="middle-first-container">
                            <div className="middle-first-container-header-2">
                                <h1 className="side-heading">Targets</h1>
                            </div>
                            <hr className="horizontal-line-2" />
                            <p className="content-container">No records found</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;