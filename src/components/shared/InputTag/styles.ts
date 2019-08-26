import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  margin: 0;

  .ReactTags__selected {
    /* display: flex; */
    /* align-items: center; */
  }

  .ReactTags__tag {
    margin: 0 5px;
    padding: 5px 7px;
    height: 1.5em;
    background: #ddd;
    color: #444;
    border-radius: 7px;
    font-size: 18px;
  }
  .ReactTags__tagInput {
    margin: 0 5px;
    display: inline-flex;
    flex-direction: column;
  }
  .ReactTags__remove {
    padding: 0 5px;
    color: black;
    font-size: 18px;
  }
  .ReactTags__tagInputField {
    border: none;
    outline: none;
    font-size: 20px;

    padding: 0.5em;
    border-radius: 2px;
    ::placeholder {

    }
  }
  .ReactTags__suggestions {
    ul {
    }
    li {
      list-style-type: none;
      background: #eee;
    }
    mark {
      background: pink;
    }
  }
`;
// <div class="ReactTags__suggestions"><ul> <li class="ReactTags__activeSuggestion"><span><mark>US</mark>A</span></li><li class=""><span>A<mark>us</mark>tria</span></li> </ul></div>
