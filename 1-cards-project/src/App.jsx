import { useState } from "react";
import Card from "./components/Card";
import Grid from "./components/Grid";
function App() {

  const [data, setData] = useState([
    {
      id: 1,
      companyLogo:
        "https://images.unsplash.com/photo-1770954179855-0871734fb34a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      companyName: "Amazon",
      postedAgo: "5 days ago",
      jobTitle: "Senior UI/UX Designer",
      tags: ["Part Time", "Senior Level"],
      salary: "$120/hr",
      location: "Mumbai, India",
      saved: false,
    },
    {
      id: 2,
      companyLogo:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1170&auto=format&fit=crop",
      companyName: "Google",
      postedAgo: "2 days ago",
      jobTitle: "Product Designer",
      tags: ["Full Time", "Mid Level"],
      salary: "$95/hr",
      location: "Bangalore, India",
      saved: true,
    },
    {
      id: 3,
      companyLogo:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1170&auto=format&fit=crop",
      companyName: "Microsoft",
      postedAgo: "1 week ago",
      jobTitle: "Frontend Engineer",
      tags: ["Full Time", "Senior Level"],
      salary: "$110/hr",
      location: "Hyderabad, India",
      saved: false,
    },
    {
      id: 4,
      companyLogo:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1170&auto=format&fit=crop",
      companyName: "Netflix",
      postedAgo: "3 days ago",
      jobTitle: "Motion Graphics Designer",
      tags: ["Contract", "Senior Level"],
      salary: "$130/hr",
      location: "Pune, India",
      saved: false,
    },
    {
      id: 5,
      companyLogo:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1170&auto=format&fit=crop",
      companyName: "Spotify",
      postedAgo: "Just now",
      jobTitle: "UX Researcher",
      tags: ["Part Time", "Junior Level"],
      salary: "$60/hr",
      location: "Delhi, India",
      saved: true,
    },
    {
      id: 6,
      companyLogo:
        "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1170&auto=format&fit=crop",
      companyName: "Apple",
      postedAgo: "4 days ago",
      jobTitle: "iOS UI Designer",
      tags: ["Full Time", "Senior Level"],
      salary: "$140/hr",
      location: "Chennai, India",
      saved: false,
    },
    {
      id: 7,
      companyLogo:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1170&auto=format&fit=crop",
      companyName: "Meta",
      postedAgo: "6 days ago",
      jobTitle: "AR/VR Experience Designer",
      tags: ["Full Time", "Mid Level"],
      salary: "$115/hr",
      location: "Kolkata, India",
      saved: true,
    },
  ]);


  return (
    <>
        <div className="container">
          <h1>welcome react</h1>
          <Grid columns={3}>
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </Grid>
        </div>
    </>
  );
}

export default App
