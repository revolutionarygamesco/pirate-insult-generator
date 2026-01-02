### 1.0.2
- Moved from extraction to keeping the original form of compendium content under version control as YAML files.

### 1.0.1
- We now extract compendium data using the Foundry VTT CLI, commit that to git, and add a packing step (again using the Foundry VTT CLI) to our build process.

### 1.0.0
- Includes 26 random tables to produce over 1,000 unique piratical insults
- Includes two macros that will generate a unique insult and whisper it to you (the other includes some more vulgar options).
- Documented API methods:
    - `generateInsult` to generate a new random insult.
    - `rollTable` to allow other methods to reuse this module's method for returning a result from a rollable table.
