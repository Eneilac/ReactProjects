const URL_RANDOM_FACT = "https://catfact.ninja/fact";


export const getRandomFacts = async () => {
    const res = await fetch(URL_RANDOM_FACT);
    const data = await res.json();
    return data.fact;
}