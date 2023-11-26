function Results({results}) {
    if (results) {
        const handleDownload = () => {
            const content = JSON.stringify(results);
            const blob = new Blob([content], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'audioResponse.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };
        return (
            <>
                <br />
                <p>Results of the audio are here... </p>
                <div className="results" style={{ "width": "100%", "overflow":"scroll","height":"45vh" }}>

                    <b>Over all score: {results.text_score.speechace_score.pronunciation}</b>
                    <br />
                    IELTS Score: {results.text_score.ielts_score.pronunciation}
                    <br /><br />
                    Word Level Scoring:
                    <ul>
                        {
                            results.text_score.word_score_list.map((element, i) => {
                                return (
                                    <>
                                        <b><div key={i}>{element.word} : {element.quality_score}</div></b>
                                        <div>Syllable Level Scoring</div>
                                        {element.syllable_score_list.map((innerElement, j) => {
                                            return (

                                                <div key={j} style={{ "paddingLeft": "20px" }}>{innerElement.letters} : {innerElement.quality_score}</div>
                                            )
                                        })
                                        }
                                    </>
                                )


                            })
                        }
                    </ul>


                    <br />
                </div>
                <br /><br />
                <button onClick={handleDownload}>Download JSON Result</button>
            </>

        )


    }
    else {
        return (
            <>
                <br />
                <p>Results of the audio are here... </p>
            </>
        )
    }
}
export default Results;