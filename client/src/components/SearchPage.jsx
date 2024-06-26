import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './Components.css'
import image1 from './../assets/university.png'
import SearchBar from './SearchBar';
import { Button } from "@chakra-ui/react";
const SearchPage = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '100vh', background:'black'}}>
    <Sidebar className="app" >
      <Menu >
        <MenuItem
          className="menu1"
          icon={
            <MenuRoundedIcon
              onClick={() => {
                collapseSidebar();
              }}
            />
          }
        >
             <svg width="160" height="46" viewBox="0 0 160 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.5402 14V25.908H70.092V13.3563H75.2414V27.6782H80.7126V9.97701H85.8621V27.6782H91.3333L91.4943 0H82.3218V7.08046H84.092V1.93103H89.4023L89.5632 25.908H87.7931V8.04598H80.7126V3.86207H71.5402V10.4598H73.4713V5.95402H78.7816V25.908H77.1724V11.4253H68V28H73.4713V14H71.5402Z" fill="#EEB572"/>
<path d="M57.816 42.144C57.456 42.144 57.116 42.092 56.796 41.988C56.476 41.884 56.188 41.712 55.932 41.472C55.684 41.224 55.484 40.892 55.332 40.476C55.188 40.06 55.116 39.544 55.116 38.928V34.104H55.764V38.88C55.764 39.568 55.856 40.108 56.04 40.5C56.232 40.892 56.484 41.168 56.796 41.328C57.108 41.488 57.448 41.568 57.816 41.568C58.184 41.568 58.528 41.488 58.848 41.328C59.168 41.168 59.424 40.892 59.616 40.5C59.808 40.108 59.904 39.568 59.904 38.88V34.104H60.516V38.928C60.516 39.544 60.44 40.06 60.288 40.476C60.144 40.892 59.944 41.224 59.688 41.472C59.432 41.712 59.144 41.884 58.824 41.988C58.504 42.092 58.168 42.144 57.816 42.144ZM62.7809 42V34.104H63.4409L66.6809 39.552L67.5689 41.148H67.6169C67.6009 40.756 67.5809 40.364 67.5569 39.972C67.5409 39.58 67.5329 39.188 67.5329 38.796V34.104H68.1329V42H67.4729L64.2329 36.54L63.3449 34.956H63.2969C63.3209 35.332 63.3409 35.708 63.3569 36.084C63.3729 36.46 63.3809 36.844 63.3809 37.236V42H62.7809ZM70.4333 42V34.104H71.0693V42H70.4333ZM76.1467 42.144C75.5147 42.144 74.9507 41.976 74.4547 41.64C73.9587 41.304 73.5707 40.828 73.2907 40.212C73.0107 39.588 72.8707 38.86 72.8707 38.028C72.8707 37.188 73.0107 36.464 73.2907 35.856C73.5707 35.248 73.9587 34.78 74.4547 34.452C74.9507 34.124 75.5147 33.96 76.1467 33.96C76.7867 33.96 77.3507 34.124 77.8387 34.452C78.3347 34.78 78.7227 35.248 79.0027 35.856C79.2827 36.464 79.4227 37.188 79.4227 38.028C79.4227 38.86 79.2827 39.588 79.0027 40.212C78.7227 40.828 78.3347 41.304 77.8387 41.64C77.3507 41.976 76.7867 42.144 76.1467 42.144ZM78.4867 43.884C77.7827 43.884 77.1987 43.7 76.7347 43.332C76.2707 42.972 75.9467 42.524 75.7627 41.988L76.4347 41.952C76.5467 42.248 76.7027 42.496 76.9027 42.696C77.1027 42.904 77.3387 43.06 77.6107 43.164C77.8907 43.268 78.2027 43.32 78.5467 43.32C78.7227 43.32 78.8747 43.308 79.0027 43.284C79.1307 43.26 79.2467 43.236 79.3507 43.212L79.4827 43.74C79.3787 43.772 79.2387 43.804 79.0627 43.836C78.8867 43.868 78.6947 43.884 78.4867 43.884ZM76.1467 41.604C76.6747 41.604 77.1307 41.456 77.5147 41.16C77.9067 40.864 78.2107 40.448 78.4267 39.912C78.6507 39.376 78.7627 38.748 78.7627 38.028C78.7627 37.308 78.6507 36.688 78.4267 36.168C78.2107 35.64 77.9067 35.236 77.5147 34.956C77.1307 34.668 76.6747 34.524 76.1467 34.524C75.6267 34.524 75.1707 34.668 74.7787 34.956C74.3867 35.236 74.0827 35.64 73.8667 36.168C73.6507 36.688 73.5427 37.308 73.5427 38.028C73.5427 38.748 73.6507 39.376 73.8667 39.912C74.0827 40.448 74.3867 40.864 74.7787 41.16C75.1707 41.456 75.6267 41.604 76.1467 41.604ZM83.9019 42.144C83.5419 42.144 83.2019 42.092 82.8819 41.988C82.5619 41.884 82.2739 41.712 82.0179 41.472C81.7699 41.224 81.5699 40.892 81.4179 40.476C81.2739 40.06 81.2019 39.544 81.2019 38.928V34.104H81.8499V38.88C81.8499 39.568 81.9419 40.108 82.1259 40.5C82.3179 40.892 82.5699 41.168 82.8819 41.328C83.1939 41.488 83.5339 41.568 83.9019 41.568C84.2699 41.568 84.6139 41.488 84.9339 41.328C85.2539 41.168 85.5099 40.892 85.7019 40.5C85.8939 40.108 85.9899 39.568 85.9899 38.88V34.104H86.6019V38.928C86.6019 39.544 86.5259 40.06 86.3739 40.476C86.2299 40.892 86.0299 41.224 85.7739 41.472C85.5179 41.712 85.2299 41.884 84.9099 41.988C84.5899 42.092 84.2539 42.144 83.9019 42.144ZM88.8668 42V34.104H93.2348V34.644H89.5028V37.536H92.6348V38.088H89.5028V41.46H93.3548V42H88.8668ZM97.1541 42.144C96.5781 42.144 96.0661 42.036 95.6181 41.82C95.1701 41.596 94.7861 41.308 94.4661 40.956L94.8621 40.524C95.1501 40.844 95.4901 41.1 95.8821 41.292C96.2821 41.476 96.7061 41.568 97.1541 41.568C97.7461 41.568 98.2101 41.428 98.5461 41.148C98.8901 40.868 99.0621 40.5 99.0621 40.044C99.0621 39.724 98.9981 39.468 98.8701 39.276C98.7421 39.084 98.5701 38.928 98.3541 38.808C98.1461 38.68 97.9141 38.556 97.6581 38.436L96.4701 37.908C96.2381 37.804 95.9981 37.672 95.7501 37.512C95.5101 37.352 95.3021 37.148 95.1261 36.9C94.9581 36.644 94.8741 36.32 94.8741 35.928C94.8741 35.544 94.9741 35.204 95.1741 34.908C95.3821 34.612 95.6621 34.38 96.0141 34.212C96.3661 34.044 96.7621 33.96 97.2021 33.96C97.6821 33.96 98.1101 34.052 98.4861 34.236C98.8701 34.42 99.1861 34.644 99.4341 34.908L99.0741 35.328C98.8421 35.08 98.5701 34.884 98.2581 34.74C97.9461 34.596 97.5941 34.524 97.2021 34.524C96.6981 34.524 96.2901 34.648 95.9781 34.896C95.6661 35.144 95.5101 35.476 95.5101 35.892C95.5101 36.188 95.5821 36.428 95.7261 36.612C95.8701 36.796 96.0461 36.948 96.2541 37.068C96.4701 37.18 96.6741 37.284 96.8661 37.38L98.0541 37.896C98.3501 38.024 98.6221 38.176 98.8701 38.352C99.1181 38.52 99.3181 38.736 99.4701 39C99.6301 39.264 99.7101 39.596 99.7101 39.996C99.7101 40.404 99.6061 40.772 99.3981 41.1C99.1901 41.42 98.8901 41.676 98.4981 41.868C98.1141 42.052 97.6661 42.144 97.1541 42.144ZM103.039 42V34.644H100.543V34.104H106.171V34.644H103.675V42H103.039Z" fill="#EEB572"/>
<line y1="15.5" x2="62" y2="15.5" stroke="#EEB572"/>
<line x1="98" y1="15.5" x2="160" y2="15.5" stroke="#EEB572"/>
</svg>
        </MenuItem>
        <MenuItem  className="menu2" icon={<HomeIcon/>}> Home </MenuItem>
        <MenuItem  className="menu2" icon={<QuestionMarkIcon/>}> FAQ </MenuItem>
      </Menu>
    </Sidebar>

    <div className='searchpagemain'>
        <div className='searchpagebar'>
          <SearchBar/>
        </div>
        <div className='searchpageheading'>
        Your Search Results
        </div>
        <div className='searchpageitems'>
          <div className='itemgrid'>
            <div className='itemimage'>
              <img src={image1} alt="" />
            </div>
            <div className='itemName'>
            Stanford University
            </div>
            <div className='itemDescription'>
            Nestled amidst California's sunshine, Stanford University stands as a beacon of academic excellence and innovation.
            </div>
            <div className='itemInfo'>
            <Button backgroundColor={'#EEB572'} width={'20vw'} height={'5.3vh'} borderRadius={'16'} color={'#000000'}fontSize={'2.1vmin'} fontWeight={'400'} fontStyle={'Saira Condensed'}>
 MORE INFO
  </Button>
            </div>
          </div>
          <div className='itemgrid'>
            <div className='itemimage'>
              <img src={image1} alt="" />
            </div>
            <div className='itemName'>
            Stanford University
            </div>
            <div className='itemDescription'>
            Nestled amidst California's sunshine, Stanford University stands as a beacon of academic excellence and innovation.
            </div>
            <div className='itemInfo'>
            <Button backgroundColor={'#EEB572'} width={'20vw'} height={'5.3vh'} borderRadius={'16'} color={'#000000'}fontSize={'2.1vmin'} fontWeight={'400'} fontStyle={'Saira Condensed'}>
 MORE INFO
  </Button>
            </div>
          </div>
          <div className='itemgrid'>
            <div className='itemimage'>
              <img src={image1} alt="" />
            </div>
            <div className='itemName'>
            Stanford University
            </div>
            <div className='itemDescription'>
            Nestled amidst California's sunshine, Stanford University stands as a beacon of academic excellence and innovation.
            </div>
            <div className='itemInfo'>
            <Button backgroundColor={'#EEB572'} width={'20vw'} height={'5.3vh'} borderRadius={'16'} color={'#000000'}fontSize={'2.1vmin'} fontWeight={'400'} fontStyle={'Saira Condensed'}>
 MORE INFO
  </Button>
            </div>
          </div>
          <div className='itemgrid'>
            <div className='itemimage'>
              <img src={image1} alt="" />
            </div>
            <div className='itemName'>
            Stanford University
            </div>
            <div className='itemDescription'>
            Nestled amidst California's sunshine, Stanford University stands as a beacon of academic excellence and innovation.
            </div>
            <div className='itemInfo'>
            <Button backgroundColor={'#EEB572'} width={'20vw'} height={'5.3vh'} borderRadius={'16'} color={'#000000'}fontSize={'2.1vmin'} fontWeight={'400'} fontStyle={'Saira Condensed'}>
 MORE INFO
  </Button>
            </div>
          </div>
        </div>
      </div>
  </div>
  
  );
};
export default SearchPage;