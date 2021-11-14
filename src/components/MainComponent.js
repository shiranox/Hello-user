import SearchComponent from "./SearchComponent";

const searchStyle = {
    justifycontent: 'center',
}
function MainComponent () {
    return (
        <div style={searchStyle}>
            <h2> My Weather App </h2>
            <SearchComponent>  </SearchComponent>

        </div>

    );
}

export default MainComponent;