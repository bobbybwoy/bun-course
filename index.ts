import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url)

        if (url.pathname === '/') {
            const body = figlet.textSync("I am learning Bun from a video!");
            return new Response(body);
        }

        if (url.pathname === '/about') {
            return new Response("About me!");
        }

        if (url.pathname === '/contact') {
            return new Response("Contact us!");
        }

        return new Response('404!');
    }
});

console.log(`Listening on port http://localhost:${server.port}`);