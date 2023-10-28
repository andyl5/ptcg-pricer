import { TextareaAutosize } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function DecklistInput(props) {
  return (
    <div>
      <TextareaAutosize
				spellCheck={false}
				aria-label="minimum height"
				maxRows={10}
				cols='35'
				placeholder="Import decklist"
				onChange={props.handleChangeDecklist}
			/>
			<LoadingButton 
        onClick={props.handleSubmitDecklist} 
        loading={props.loading} loadingIndicator="Loading…" 
        variant="outlined"
      >Submit</LoadingButton>
    </div>
  )
}

export default DecklistInput