import fetch from "node-fetch";
import data from "./fcc.js";

const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

const main = async() => {
    for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        const name = data[i].blockName;
        console.log("Completed : ", name);
        const req = await fetch(
            "https://api.freecodecamp.org/modern-challenge-completed", {
                headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
                    "content-type": "application/json",
                    "csrf-token": "KnGyNtQH-GFyuak6u5gqPa8sV8169vx6PRyY",
                    "sec-ch-ua": '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"macOS"',
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    cookie: "_ga=GA1.2.77626633.1630911571; _gid=GA1.2.1022758339.1630911571; connect.sid=s%3AmzxmMJhhS3UygaVt56wWqUMZ1lJFYOK3.89U9HgtTOpVIrD7UGsUIBk7GvMfLY3u0RT20VkiQPEI; _csrf=BfCbbYVYFZh225oox9s649yq; csrf_token=KnGyNtQH-GFyuak6u5gqPa8sV8169vx6PRyY; jwt_access_token=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NUb2tlbiI6eyJpZCI6IkpZS0FFQ2FWUWZJaktUOW1oTFVFc3pqbG40WklBbENBRm5udTd1N0Y0YTA2Nnd3dE5MRmt2U0ZMaHI2cVh5b1oiLCJ0dGwiOjc3NzYwMDAwMDAwLCJjcmVhdGVkIjoiMjAyMS0wOS0wNlQwNzowMToxNC4zMjRaIiwidXNlcklkIjoiNWViNTdiNjUxMGRlYmZiNTY5YTQ1MjgwIn0sImlhdCI6MTYzMDkxMTY3NH0.B0FQCuTN3mooMqtUdSRLBF45CZ1p2UDy-Xhxuua-Jh4.eGmppMiVVauAbwvjgJtE7Vkh9gdnI5lw%2Bc988agg2oY; _gat=1",
                },
                referrer: "https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/link-to-external-pages-with-anchor-elements",
                referrerPolicy: "no-referrer-when-downgrade",
                body: JSON.stringify({ id, files: {} }),
                method: "POST",
                mode: "cors",
            }
        );
        const json = await req.json();
        console.log("Completed : " + i + "challenges");
        console.log(json);
    }
};
main();