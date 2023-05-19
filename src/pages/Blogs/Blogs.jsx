import { updateDocumentTitle } from "../../utils/FunctionTitle";
import ToyBanner from "../Shared/ToyBanner";


const Blogs = () => {
    updateDocumentTitle("Toy Athlete | Blogs")
    
    
    return (
        <div>
            <ToyBanner>Frequently Asked Questions</ToyBanner>
            <div className="my-4 md:my-8  w-full md:w-5/6 gap-4 mx-auto grid grid-cols-1 md:grid-cols-2">
                <div tabIndex={0} className="collapse collapse-arrow border border-sky-300 bg-sky-100 rounded-box my-2 md:my-4">
                    <div className="collapse-title text-xl font-medium ">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content mt-4">
                        <p>
                            Access Token → Passport
                            Refresh Token → NID
                        </p>
                        <br />
                        <p>
                            If the Passport becomes invalid, it can be repeatedly renewed using the NID. However, if the NID is lost or becomes invalid, it will be necessary to go through the entire verification process again to obtain a new NID. After that, the Passport can be created or renewed again.
                        </p>
                        <br />
                        <p>   If the Access Token expires, it can be repeatedly accessed using the Refresh Token. However, if the Refresh Token expires, then it will be necessary to authenticate again from scratch.</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-arrow border border-sky-300 bg-sky-100 rounded-box my-2 md:my-4">
                    <div className="collapse-title text-xl font-medium">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content mt-4">
                        <p>
                            SQL databases have a fixed structure with tables and columns to store data. They are good for organized and structured data but can be difficult to scale.
                        </p>
                        <br />
                        <p>
                            NoSQL databases are more flexible and can handle different types of data, making them easier to scale horizontally across multiple servers.
                        </p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-arrow border border-sky-300 bg-sky-100 rounded-box my-2 md:my-4">
                    <div className="collapse-title text-xl font-medium">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content mt-4">
                        <p>
                            Express.js is a popular web application framework for Node.js. It simplifies the creation of web servers and handling HTTP requests. It is beginner-friendly and widely used.
                        </p>
                        <br />
                        <p>
                            Nest.js is a TypeScript-based framework that builds on top of Express.js, providing additional features like dependency injection and modular architecture for creating scalable and maintainable applications.
                        </p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-arrow border border-sky-300 bg-sky-100 rounded-box my-2 md:my-4">
                    <div className="collapse-title text-xl font-medium">
                        What is MongoDB aggregate and how does it work?
                    </div>
                    <div className="collapse-content mt-4">
                        <p>
                            MongoDB Aggregate is a feature that allows you to perform complex data analysis and transformations on data stored in MongoDB.
                        </p>
                        <br />
                        <p>
                            It uses a pipeline-based approach, where you can chain multiple stages together to filter, group, project, sort, and perform computations on data. It helps in aggregating and summarizing data in a flexible manner.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;