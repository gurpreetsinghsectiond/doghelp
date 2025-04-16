import { dogBreeds, getRandomItems } from './dogData';

export const fetchRandomDogImage = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    
    if (data.status === 'success') {
      return data.message;
    } else {
      throw new Error('Failed to fetch dog image');
    }
  } catch (error) {
    console.error('Error fetching dog image:', error);
    return 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1344.jpg';
  }
};

export const fetchMultipleRandomDogImages = async (count = 18) => {
  try {
    const promises = Array(count).fill().map(() => fetchRandomDogImage());
    return await Promise.all(promises);
  } catch (error) {
    console.error('Error fetching multiple dog images:', error);
    return Array(count).fill('https://images.dog.ceo/breeds/retriever-golden/n02099601_1344.jpg');
  }
};

export const getRandomDogFacts = (count = 18) => {
  const allFacts = dogBreeds.flatMap(breed => breed.facts);
  return getRandomItems(allFacts, count);
};

export const extractBreedFromImageUrl = (url) => {
  try {
    const breedPath = url.split('/breeds/')[1].split('/')[0];
    return breedPath
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } catch (error) {
    return 'Unknown Breed';
  }
};

export const getRandomDescription = (breed) => {
  const matchingBreed = dogBreeds.find(
    b => b.title.toLowerCase() === breed.toLowerCase()
  );
  
  if (matchingBreed && matchingBreed.descriptions.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingBreed.descriptions.length);
    return matchingBreed.descriptions[randomIndex];
  }
  
  return `The ${breed} is a wonderful dog breed known for its unique characteristics and temperament. These dogs make excellent companions and have fascinating histories in various parts of the world. Each breed has its own special traits that make them beloved by dog enthusiasts around the globe.`;
};

export const fetchRandomDogCards = async (count = 18) => {
  try {
    const images = await fetchMultipleRandomDogImages(count);
    const facts = getRandomDogFacts(count);
    
    return images.map((image, index) => {
      const breed = extractBreedFromImageUrl(image);
      return {
        id: `dog-${index}`,
        title: breed,
        image,
        fact: facts[index],
        description: getRandomDescription(breed)
      };
    });
  } catch (error) {
    console.error('Error generating random dog cards:', error);
    const { getRandomDogCards } = await import('./dogData');
    return getRandomDogCards(count);
  }
};