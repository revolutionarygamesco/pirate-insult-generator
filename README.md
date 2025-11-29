# Pirate Insult Generator

![Latest Release](https://img.shields.io/github/v/release/revolutionarygamesco/pirate-insult-generator?label=Latest+release&style=for-the-badge)
![Foundry Version](https://img.shields.io/badge/Foundry-v13-informational?label=Foundry+version&style=for-the-badge)
![Test Status](https://img.shields.io/github/actions/workflow/status/revolutionarygamesco/pirate-insult-generator/test.yml?label=Test+status&style=for-the-badge)
![License](https://img.shields.io/github/license/revolutionarygamesco/pirate-insult-generator?style=for-the-badge)

This is a simple module for Foundry VTT that generates
piratical insults (e.g., _yellow-bellied wharf rat_).

## API

### `generateInsult`

Rolls on the appropriate roll tables to generate an insult.

#### Signature

```typescript
async (rating: 'PG13' | 'R') => Promise<string>
```

#### Parameters

##### `rating`

How vulgar can the insult be? Most will be PG-13 either way, but if you specify
R you can get something more vulgar back. 

_Default:_ `PG13`

### `rollTable`

This method makes a roll on a given roll table and returns the results.

#### Signature

```typescript
interface RollTableResult {
  type?: string
  img?: string
  name?: string
  description?: string
}

interface RollTableOptions {
  displayChat?: boolean
  recursive?: boolean
  results?: documents.TableResult[]
  roll?: Roll
  rollMode?: string
}

async (id: string, options?: RollTableOptions) => Promise<RollTableResult[]>
```

#### Parameters

##### `id`

The UUID of the table you want to roll on.

##### `options.displayChat`

Whether to automatically display the results in chat.

_Default:_ `true`

#### `options.recursive`

Allow drawing recursively from inner RollTable results.

_Default_: `true`

#### `options.results`

One or more table results which have been drawn.

_Default_: `undefined`

#### `options.roll`

An existing Roll instance to use for drawing from the table.

_Default_: `undefined`

#### `options.rollMode`

The chat roll mode to use when displaying the result.

_Example:_ Provide `{ rollMode: 'whisper' }` to whisper the result to the
current player.

_Default_: `undefined`