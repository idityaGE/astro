const getLinkUrl = async (id) => {
    return new Promise((resolve) => {
        // Simulate database lookup
        const links = {
            '123': 'https://example.com/page1',
            '456': 'https://example.com/page2',
        };
        setTimeout(() => {
            resolve(links[id] || null);
        }, 100);
    });
}

export async function GET({ params, redirect }) {
    const { id } = params;
    const link = await getLinkUrl(id);

    if (!link) {
        return new Response(null, {
            status: 404,
            statusText: "Not found",
        });
    }

    return redirect(link, 307);
}