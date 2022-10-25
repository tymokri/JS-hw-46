# JS-hw-46

Make function Constructor Student.

The Student has a name, surname, year of birth - these are properties.
And there is an opportunity to get the age of the student and his average score - these are methods.
All students also have 2 arrays of the same length, they have 10 elements, initially they are not filled, but for 10 elements.

This is an array that notes attendance each time we call the .present() method
on the next empty space in the array is written true when we call
.absent() - false is written and the second is an array with estimates and the mark() method,
we can pass a score from 0 to 10. Length is also fixed

Provide some protection against the fact that arrays cannot have more than 10 records.
Array is a property, present and absent, mark are methods.

Well, the last method: .summary(), it checks the average score, and the average visit,
and if the average score is greater than 9 and the average visit is more than 0.9,
then the summary method returns the line "Wow! It's amazing!", if one of these values is less,
then - "Ok. But you can do it better", if both below - "A tad far from perfect! :/".
Well, do not forget after you write a wonderful constructor,
create a couple of instances (specific students) and twitch the methods.