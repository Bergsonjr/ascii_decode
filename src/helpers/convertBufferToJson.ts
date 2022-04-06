export default async function convertBufferToJson(request: any) {
    const buffers = [];

    for await (const chunk of request) {
        buffers.push(chunk);
    }

    const data = Buffer.concat(buffers).toString();

    return JSON.parse(data);
}
