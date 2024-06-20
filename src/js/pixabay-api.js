const getArr = userParam => {
  const searchParams = new URLSearchParams({
    key: '44484405-088f061e287c84f80e0f16531',
    q: userParam,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export default getArr;