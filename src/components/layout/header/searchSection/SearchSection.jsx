import { Box, IconButton, InputBase, alpha, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { setShowSearchSection } from "../../../redux/slice/searchSectionSlice";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(10),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
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
        [theme.breakpoints.up('lg')]: {
            width: '40ch',
        },
    },
}));

export default function SearchSection() {

    const dispatch = useDispatch();


    return (
        <>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Search>
                    <SearchIconWrapper>
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={() => dispatch(setShowSearchSection(true))}
                        >
                            <SearchIcon />
                        </IconButton>
                    </SearchIconWrapper>
                    <StyledInputBase sx={{
                        display: {
                            xs: 'none',sm: 'none', md: 'flex'
                        }
                    }}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Box>
        </>
    )
}