import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {Card,Button} from 'react-bootstrap';
import "./SingleCandidate.css";
 
const SingleCandidate = () => {
    const{candidateId}=useParams()
    const[candidate,setCandidate]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${candidateId}`)
        .then(res=>res.json())
        .then(data=>setCandidate(data))
    },[candidateId])
    console.log(candidate)
    return (
        <div className='d-flex justify-content-center mt-5'>
        <Card className='my-card rounded'>
        <Card.Header>
                <img  className='my-image' src='https://th.bing.com/th/id/OIP.c2GTibztP9NW0_ITWQ2qwwHaGo?pid=ImgDet&rs=1'alt="" />
                
                <div className='d-flex justify-content-between'>
                <blockquote className="blockquote mb-0">
            <p className='mt-3'>
              {' '}
              {candidate?.name}{' '}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Enginner</cite>
            </footer>
          </blockquote>
            <div>
              <p>Uttara,Dhaka</p>
              <p>Email:{candidate?.email}</p>
              </div>
              </div>

        </Card.Header>
        <Card.Body>
         
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum, voluptate, sapiente facere nisi similique iure cupiditate animi vitae eum magni, totam quis a cumque pariatur aliquam qui sunt repellendus consequuntur maxime vel harum ea laudantium! Vitae totam ipsa nihil! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, et. Omnis, officia earum debitis sequi, quae veritatis quas nulla, quasi dolores atque nostrum hic repellendus quis! Libero, quam ut? Debitis maiores voluptas nemo officiis, odio explicabo repellendus ullam minima ipsam quam natus aliquam omnis nisi quaerat esse consequuntur nesciunt. Omnis!</p>

          </div>
        </Card.Body>
        <Card.Footer>
<div className='d-flex justify-content-between'>
<div className="p-2">
              <a rel="noopener noreferrer" href="https://www.facebook.com" target="_blank">
                <i style={{ color: '#1877f2' }} className="m-1 fab fa-facebook-square fa-2x"></i></a>
              <a rel="noopener noreferrer" href="https://www.instagram.com" target="_blank">
                <i className="insta m-1 fab fa-instagram fa-2x"></i></a>

              <a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank">
                <i style={{ color: '#E60023' }} className="m-1 fab fa-pinterest-square fa-2x"></i></a>

              <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
                <i style={{ color: '#00acee' }} className="m-1 fab fa-twitter-square fa-2x"></i></a>

              <a rel="noopener noreferrer" href="https://www.youtube.com/" target="_blank">
                <i style={{ color: '#c4302b' }} className="m-1 fab fa-youtube-square fa-2x"></i></a>
            </div>

<div>
  <Button varian='danger'>Resume<span><i className='fa-solid fa-download fs-3 '></i></span></Button>
</div>
</div>
        </Card.Footer>
      </Card>
      </div>
  //     
    );
};

export default SingleCandidate;