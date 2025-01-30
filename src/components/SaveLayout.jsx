const SaveLayout = async (items) => {
  const response = await fetch('/api/save-portfolio', {
    method: 'POST',
    body: JSON.stringify(items),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  console.log('Layout saved:', data);
};

export default SaveLayout;
