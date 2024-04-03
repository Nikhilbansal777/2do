import { Link, NavLink, useLoaderData } from "react-router-dom";

const CounterInfo = () => {

    const careers = useLoaderData();

    return (
        <div>
            <h2>Welcome to help section of To Do List App</h2>
            {careers.map((career) => (                // console.log(career.id);
                // <p> {career.id }</p>
                <NavLink to='/' key={career.id}>
                    <p>{career.title}</p>
                    <p>Base on {career.location}</p>
                </NavLink>
            ))}
        </div>
    );
};

export default CounterInfo;

//loader function

export const getDataViaLoader = async () => {
    const res = await fetch('http://localhost:4000/careers');
    console.log(res);
    return res.json();
};