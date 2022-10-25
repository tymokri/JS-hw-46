'use strict';

( () => {


    function Student(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.attendances = new Array(10);
        this.marks = new Array(10);
    }

    Student.prototype.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    }

    Student.prototype.present = function () {
        if (this.attendances[this.attendances.length - 1] !== undefined) throw new Error('Attendances array is full');

        for (let i = 0; i < this.attendances.length; i++) {
            if (this.attendances[i] === undefined) {
                this.attendances[i] = true;
                break;
            }
        }
    }

    Student.prototype.absent = function () {
        if (this.attendances[this.attendances.length - 1] !== undefined) throw new Error('Attendances array is full');

        for (let i = 0; i < this.attendances.length; i++) {
            if (this.attendances[i] === undefined) {
                this.attendances[i] = false;
                break;
            }
        }
    }

    Student.prototype.mark = function (value) {
        if (this.marks[this.marks.length - 1] !== undefined) throw new Error('Marks array is full');
        if (value > 10) throw new Error('Mark is invalid');

        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i] === undefined) {
                this.marks[i] = value;
                break;
            }
        }
    }

    let studentJohn = new Student('John', 'Bush', 2005);

    studentJohn.present();
    studentJohn.present();
    studentJohn.absent();
    studentJohn.present();
    studentJohn.present();
    studentJohn.absent();
    studentJohn.absent();
    studentJohn.present();
    studentJohn.absent();
    studentJohn.absent();

    studentJohn.mark(9);
    studentJohn.mark(5);
    studentJohn.mark(4);
    studentJohn.mark(10);
    studentJohn.mark(4);
    studentJohn.mark(8);
    studentJohn.mark(4);
    studentJohn.mark(7);
    studentJohn.mark(10);
    studentJohn.mark(5);


    Student.prototype.summary = function () {
        const massage1 = "Wow! It's amazing!";
        const massage2 = "Ok. But you can do it better";
        const massage3 = "A tad far from perfect! :/";


        const indexOfUndefinedAttendances = this.attendances.findIndex( item => {
            return item === undefined;
        });
        if (indexOfUndefinedAttendances !== -1) throw new Error('Based on attendances information course is not completed');

        const indexOfUndefinedMarks = this.marks.findIndex( item => {
            return item === undefined;
        });
        if (indexOfUndefinedMarks !== -1) throw new Error('Based on marks information course is not completed');


        let sumMarks = null;

        for (let i = 0; i < this.marks.length; i += 1) {
            sumMarks += this.marks[i]
        }
        let averageMark = sumMarks/this.marks.length;


        let averageAttendance = this.attendances.map(item => {
            if (item) {
                return 1;
            } else {
                return 0;
            }
        }).reduce((acc, item) => {
            return acc + item;
        })/this.attendances.length;


        console.log( "averageAttendance: " + averageAttendance);
        console.log( "averageMark:" + averageMark);


        if (averageMark > 9 && averageAttendance > 0.9) return massage1;
        if (averageMark < 9 && averageAttendance < 0.9) {
            return massage3;
        } else {
            return massage2;
        }

    }

    console.log(studentJohn);
    console.log(studentJohn.getAge());
    console.log(studentJohn.summary());


})();