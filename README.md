# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./Screenshot%202022-11-12%20at%2020.24.23.png)

## My process

I subtracted a current javascript date from a set instance in order to get the amount of miliseconds until the set date.
I then created an object with keys corresponding to the time intervals on the countdown timer: Days, hours, minutes, seconds.
The keys access an array in which the first value references the amount I would need to divide by to get the amount of said time intervals until the date, and the second value refences the next smallest catergory so that I could use the modulo operation to get the requisite value.
In order to keep the values updated I set up an interval that would repeat the function every second.

### What I learned

I learned some of the intricacies involved in CSS animations.

I struggled with the flip animation because the text was mirrored upon rotating past 90 degrees.
To rectify this I instantly flipped the scaleY transform attribute at 50% while the other transitions happened linearly.

```CSS
@keyframes flip {
    0% {
        transform: perspective(200px) rotateX(0deg) scaleY(1);
    }
    49% {
        transform: perspective(200px) rotateX(90deg) scaleY(1);
    }
    50% {
        transform: perspective(200px) rotateX(90deg) scaleY(-1);
    }
    100% {
        transform: perspective(200px) rotateX(180deg) scaleY(-1);
    }
}
```
