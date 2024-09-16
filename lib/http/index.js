export const GET = async (url, params) => {
    const response = await fetch(url, { ...params });
    const result = await response.json();

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return result;
};
