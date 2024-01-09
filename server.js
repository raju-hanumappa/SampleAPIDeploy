import { app } from "./app.js";

app.get("/", (req, res) => {
    res.send("<h1>Working Fine</h1>");
});

app.route("/users").get((req, res, next) => {
    res.status(200).json(
        //     {
        //     users: [],
        //     success: false,
        //   }
        [
            { month: 'Jan', sales: 1500, revenue: 3500, users: 500 },
            { month: 'Feb', sales: 4200, revenue: 3000, users: 600 },
            { month: 'Mar', sales: 2000, revenue: 4000, users: 1900 },
            { month: 'Apr', sales: 3800, revenue: 8400, users: 600 },
            { month: 'May', sales: 2500, revenue: 5000, users: 600 },
            { month: 'Jun', sales: 3800, revenue: 6000, users: 1900 },
            { month: 'Jul', sales: 3000, revenue: 8400, users: 1100 },
            { month: 'Aug', sales: 2500, revenue: 5500, users: 600 },
            { month: 'Sep', sales: 3500, revenue: 7000, users: 1900 },
            { month: 'Oct', sales: 3500, revenue: 5500, users: 1400 },
            { month: 'Nov', sales: 3000, revenue: 8000, users: 700 },
            { month: 'Dec', sales: 4200, revenue: 8700, users: 2000 }
        ]
    );
});

app.listen(process.env.PORT, () => {
    console.log(`Server is working on Port ${process.env.PORT}`);
});
