# Snakes and Ladders


# Events 

1. Game starts.
2. Only one player plays in this setup
3. You need to roll a 1 or a 6 to begin.
4. Jumping on a snake block brings you to a **one-way** end (farther from the 100 mark).
5. Jumping on a ladder sends you to a **one-way** end (nearer to the 100 mark).
6. Game continues until the player reaches the 100 mark.


# Requirements

1. Each player has a unique position variable.
2. Ladder cannot climb up to reach a snake block and vice-versa.
3. dictionary of snakes and ladders hold the start and the end points.
4. Every time a player rolls the die, the new position-value generated will search the dictionaries.

# Reasoning
1. Creating a complete array of blocks seemed impractical, because it would have increased the 
   size of the program. Since we already know that there are 100 steps, we can 
   implement the same with a unique player position/state variable.
2. Moreover, enables smoother implementation for the frontend developer. Can create 100 
   elements with JS as required and can position the player according to present state.  
3. Con : Iterating through the same dictionary multiple times will make it slow.