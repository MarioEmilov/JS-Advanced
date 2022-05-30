function solve() {
    let obj = {
        mage: function mage(str) {
            let mageObj = {
                name: str,
                health: 100,
                mana: 100,
                cast: function cast(spell) {
                    this.mana -= 1;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
            return mageObj;
        },
        fighter: function fighter(str) {
            let fighterObj = {
                name: str,
                health: 100,
                stamina: 100,
                fight: function fight() {
                    console.log(`${this.name} slashes at the foe!`);
                    this.stamina -= 1;
                }
            }
            return fighterObj;
        }
    }
    return obj;
}

let create = solve();
const scorcher = create.mage("Scorcher");

scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);