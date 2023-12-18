import { Box, IconButton, InputBase, alpha, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useDispatch } from "react-redux";
import { setShowSearchSection } from "../../../redux/slice/searchSectionSlice";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: '100%',
    borderRadius: 5
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
        marginRight: theme.spacing(2)
    },
}));

export default function MobileSearchSection() {

    const dispatch = useDispatch();

    return (
        <>
            <Box sx={{ display: 'flex', flexGrow: 1}}>
                <Search>
                    <SearchIconWrapper>
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => console.log("hello")}
                        >
                            <SearchIcon />
                        </IconButton>
                    </SearchIconWrapper>
                    <StyledInputBase sx={{
                        display: 'flex',
                        flexGrow:1
                    }}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />


                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => dispatch(setShowSearchSection(false))}
                    >
                        <HighlightOffOutlinedIcon />
                    </IconButton>
                </Search>
            </Box>
        </>
    )
}