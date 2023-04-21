import React from 'react';

function PalindromeDates() {
  function isPalindrome(str) {
    // Reverse the string and compare with the original string
    return str === str.split('').reverse().join('');
  }

  function findPalindromeDates() {
    const palindromeDates = [];

    // Loop through all dates between 01-01-2001 and 31-12-2021
    for (let year = 2001; year <= 2021; year++) {
      for (let month = 1; month <= 12; month++) {
        let daysInMonth = 31;
        if (month === 2) {
          daysInMonth = year % 4 === 0 ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(month)) {
          daysInMonth = 30;
        }
        for (let day = 1; day <= daysInMonth; day++) {
          const dateStr = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

          // Check if date is palindrome
          if (isPalindrome(dateStr.split('-').join(''))) {
            palindromeDates.push(dateStr);
          }
        }
      }
    }

    return palindromeDates;
  }

  const palindromeDates = findPalindromeDates();

  return (
    <div className='Plaindrome_card'>
      <h1 className='part_palindrome'>2. Palindrome Dates between 01-01-2001 and 31-12-2021:</h1>
      <ul className='part_palindrome2'>
        {palindromeDates.map((dateStr, index) => (
          <li key={index}>{dateStr}</li>
        ))}
      </ul>
    </div>
  );
}

export default PalindromeDates;
