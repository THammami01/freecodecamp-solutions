const palindrome = (str) => {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  for (let i = 0; i < str.length / 2; i++)
    if (str[i] !== str[str.length - i - 1]) return false;

  return true;
};

palindrome("eye");
