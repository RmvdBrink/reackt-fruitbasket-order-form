import React, {useState} from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import InputComponent from "./components/InputComponent";
import StartButton from "./components/StartButton";


function App() {

    const [stateStraw, setStateStraw] = useState(0,)
    const [stateBanana, setStateBanana] = useState(0,)
    const [stateAppel, setStateAppel] = useState(0,)
    const [stateKiwi, setStateKiwi] = useState(0,)





    const [formState, setFormState] = useState({
    name: "",
    lastname: "",
    age: 0,
    zipcode:"",
    frequentie:" iedere week ",
    moment: "day",
    commits: "",
    condition: false,


})

function resetCounter() {
    setStateStraw(0)
    setStateBanana(0)
    setStateAppel(0)
    setStateKiwi(0)
}

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
        console.log(`Fruitmand bestelling - aardbeien: ${stateStraw}, bananen: ${stateBanana}, appels: ${stateAppel}, kiwi's: ${stateKiwi}`);
    }

    function handleFormChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue
        });

    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <section  className="fruit-counters">
                <article>
                     <Buttons
                     fruitName="🍓aardbeien"
                     type="button"
                     fruitValue={stateStraw}
                    classEnabled={stateStraw === 0 ? "active" : "default" }
                     decrement={() => setStateStraw(stateStraw - 1)}
                     increment={() => setStateStraw(stateStraw + 1)}
                     isDisabled={stateStraw === 0}
                     classEnabledIn={stateStraw === 0 ? "start" : "default"  }
                     />



                    {/*<h2>🍓Aardbeien</h2>*/}
                    {/*<button type="button" disabled={stateStraw === 0} onClick={() => setStateStraw(stateStraw - 1)}>*/}
                    {/*    -*/}
                    {/*</button>*/}
                    {/*<p>{stateStraw}</p>*/}
                    {/*<button type="button" onClick={() => setStateStraw(stateStraw + 1)}>*/}
                    {/*    +*/}
                    {/*</button>*/}

            </article>

            <article>


                <Buttons
                    fruitName="🍌banaan"
                    type="button"
                    fruitValue={stateBanana}
                    classEnabled={stateBanana === 0 ? "active" : "default" }
                    decrement={() => setStateBanana(stateBanana - 1)}
                    increment={() => setStateBanana(stateBanana + 1)}
                    isDisabled={stateBanana === 0}
                    classEnabledIn={stateBanana === 0 ? "start" : "default"  }
                />

                {/*<h2>🍌banaan</h2>*/}
                {/*<button type="button" disabled={stateBanana === 0} onClick={() => setStateBanana(stateBanana - 1)}>*/}
                {/*    -*/}
                {/*</button>*/}
                {/*<p>{stateBanana}</p>*/}
                {/*<button type="button" onClick={() => setStateBanana(stateBanana + 1)}>*/}
                {/*    +*/}
                {/*</button>*/}

            </article>

            <article>

                <Buttons
                    fruitName="🍏appel"
                    type="button"
                    fruitValue={stateAppel}
                    classEnabled={stateAppel === 0 ? "active" : "default" }
                    decrement={() => setStateAppel(stateAppel - 1)}
                    increment={() => setStateAppel(stateAppel + 1)}
                    isDisabled={stateAppel === 0}
                    classEnabledIn={stateAppel === 0 ? "start" : "default"  }
                />


                {/*<h2>🍏appel</h2>*/}
                {/*<button type="button" disabled={stateAppel === 0} onClick={() => setStateAppel(stateAppel - 1)}>*/}
                {/*    -*/}
                {/*</button>*/}
                {/*<p>{stateAppel}</p>*/}
                {/*<button type="button" onClick={() => setStateAppel(stateAppel + 1)}>*/}
                {/*    +*/}
                {/*</button>*/}

            </article>

            <article>

                <Buttons
                    fruitName="🥝kiwi"
                    type="button"
                    fruitValue={stateKiwi}
                    classEnabled={stateKiwi === 0 ? "active" : "default" }
                    decrement={() => setStateKiwi(stateKiwi - 1)}
                    increment={() => setStateKiwi(stateKiwi + 1)}
                    isDisabled={stateKiwi === 0}
                    classEnabledIn={stateKiwi === 0 ? "start" : "default"  }
                />

                {/*<h2>🥝kiwi</h2>*/}
                {/*<button type="button" disabled={stateKiwi === 0} onClick={() => setStateKiwi(stateKiwi - 1)}>*/}
                {/*    -*/}
                {/*</button>*/}
                {/*<p>{stateKiwi}</p>*/}
                {/*<button type="button" onClick={() => setStateKiwi(stateKiwi + 1)}>*/}
                {/*    +*/}
                {/*</button>*/}

            </article>
            <article>

                <StartButton
                type="button"
                clickHandler={resetCounter}
                children="reset"
                />
                {/*<button type="button" onClick={() => resetCounter()}*/}
                {/*>Reset</button>*/}

            </article>
        </section>


            <form onSubmit={handleSubmit}>
                <section>

                   <InputComponent
                       name="name"
                        type="text"
                       labelName="name"
                       value={formState.name}
                       clickHandler={handleFormChange}
                       children="Naam"
                   />

                {/*<label htmlFor="details-name"></label>*/}
                {/*    Naam:*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="name"*/}
                {/*        id="details-name"*/}
                {/*        value={formState.name}*/}
                {/*        onChange={handleFormChange}*/}
                {/*    />*/}
                </section>

                <section>

                    <InputComponent
                        name="lastname"
                        type="text"
                        labelName="lastname"
                        value={formState.lastname}
                        clickHandler={handleFormChange}
                        children="Achternaam"
                    />
                {/*<label htmlFor="detail-lastname"></label>*/}
                {/*    Achternaam:*/}
                {/*    <input*/}
                {/*    type="text"*/}
                {/*    name="lastname"*/}
                {/*    id="detail-lastname"*/}
                {/*    value={formState.lastname}*/}
                {/*        onChange={handleFormChange}*/}
                {/*    />*/}
                </section>
                <section>

                    <InputComponent
                        name="age"
                        type="number"
                        labelName="age"
                        value={formState.age}
                        clickHandler={handleFormChange}
                        children="Leeftijd"
                    />

                {/*<label htmlFor="detail-age"></label>*/}
                {/*    Leeftijd:*/}
                {/*    <input*/}
                {/*        type="number"*/}
                {/*        name="age"*/}
                {/*        id="detail-age"*/}
                {/*        value={formState.age}*/}
                {/*        onChange={handleFormChange}*/}
                {/*    />*/}
                </section>

                <section>

                    <InputComponent
                        name="zipcode"
                        type="text"
                        labelName="zipcode"
                        value={formState.zipcode}
                        clickHandler={handleFormChange}
                        children="Postcode"
                    />
                {/*<label htmlFor="detail-zipcode"></label>*/}
                {/*    Postcode:*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        name="zipcode"*/}
                {/*        id="detail-zipcode"*/}
                {/*        value={formState.zipcode}*/}
                {/*        onChange={handleFormChange}*/}
                {/*    />*/}
                </section>

                <section>
                <label htmlFor="detail-frequentie"></label>
                    Bezorgfrequentie:
                    <select
                        name="frequentie"
                        value={formState.frequentie}
                        onChange={handleFormChange}
                    >
                        <option value="each-week">Iedere week</option>
                        <option value="every-other-week">Om de week</option>
                        <option value="each-month">Iedere Maand</option>

                        </select>
                </section>

                <section>
                <label htmlFor="detail-moment"></label>
                    Overdag
                    <input
                        type="radio"
                        id="detail-moment"
                        name="moment"
                        value="day"
                        checked={formState.moment === "day"}
                        onChange={handleFormChange}
                    />



                <label htmlFor="detail-moment"></label>
                    s`Avonds
                    <input
                        type="radio"
                        id="detail-moment"
                        name="moment"
                        value="night"
                        checked={formState.moment === "night"}
                        onChange={handleFormChange}

                    />
                </section>

                <section>

                <label htmlFor="detail-commits"></label>
                Opmerkingen
                <textarea
                    id="detail-commits"
                    rows="5"
                    cols="40"
                    name="commits"
                    value={formState.commits}
                    onChange={handleFormChange}>
                </textarea>

                </section>

                <section>
                <label htmlFor="detail-condition"> </label>
                    Ik ga akkoord met de voorwaarden
                    <input
                        type="checkbox"
                        id="detail-condition"
                        name="condition"
                        checked={formState.condition}
                        onChange={handleFormChange}
                    />
                </section>

                <StartButton
                    type="submit"
                    children="verzenden"

                />

                {/*<button type="submit">Verzend</button>*/}

            </form>

    </>
  );
}

export default App;
