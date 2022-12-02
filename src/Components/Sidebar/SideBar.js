import { styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const WrapperDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    display: 'flex',
    // width: '20%'
}));

const SideBarDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    // background: 'rgb(5, 68, 104
    width: '225px',
    height: '100%',
    padding: '20px 0',
    transition: 'all 0.5s ease'
}));

const SideBarTabs = styled('a')(({ theme, color = "#6065D8" }) => ({
    display: 'block',
    padding: '13px 10px',
    fontSize: '16px',
    position: 'relative',
    textDecoration: 'none',
    backgroundColor: '#FEEFC3',
    color: 'black',
    borderRadius: '0px 50px 50px 0px'
}));

const SideBar = () => {
    return (
        <WrapperDiv>
            <SideBarDiv>
                <SideBarTabs href="#" class="active">
                    {/* <span class="icon"><i class="fas fa-home"></i></span> */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <HomeIcon /><span class="item" style={{ marginLeft: '40px' }}>Notes</span>
                    </div>
                </SideBarTabs>
            </SideBarDiv>
        </WrapperDiv>
    )
}

export default SideBar;