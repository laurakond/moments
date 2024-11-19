import React from 'react';
import appStyles from '../../App.module.css';
import { Container } from 'react-bootstrap';
import Asset from '../../components/Asset';
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';

const PopularProfiles = ({mobile}) => {
    const {PopularProfiles} = useProfileData();


    return (
        <Container 
            className={`${appStyles.Content} 
            ${mobile && 'd-lg-none text-center mb-3'
            }`}
        >
            {PopularProfiles.results.length ? (
                <>
                <p>Most followed profiles.</p>
                {mobile ? (
                    <div className='d-flex justify-content-around'>
                        {PopularProfiles.results.slice(0, 4).map(profile=>(
                            <Profile key={profile.id} profile={profile} mobile />
                        ))}
                    </div>
                ) : (
                    PopularProfiles.results.slice(0, 4).map(profile=>(
                        <Profile key={profile.id} profile={profile} />
                    ))
                )}
                </>
            ) : (
                <Asset spinner/>
            )
            }
            
        </Container>
    )
}

export default PopularProfiles