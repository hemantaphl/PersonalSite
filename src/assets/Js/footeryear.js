  const now = new Date();
  const nepalOffset = 5.75 * 60;
  const nepalTime = new Date(now.getTime() + (nepalOffset - now.getTimezoneOffset()) * 60000);
  document.getElementById("year").textContent = nepalTime.getFullYear();