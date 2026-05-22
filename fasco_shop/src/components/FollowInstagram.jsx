import photo1 from "../assets/images/scroll-photo-1.png";
import photo2 from "../assets/images/scroll-photo-2.png";
import photo3 from "../assets/images/scroll-photo-3.png";
import photo4 from "../assets/images/scroll-photo-4.png";
import photo5 from "../assets/images/scroll-photo-5.png";
import photo6 from "../assets/images/scroll-photo-6.png";
import photo7 from "../assets/images/scroll-photo-7.png";

export default function FollowInstagram() {
  return (
    <div>
      <section>
        <div className='flex flex-col items-center text-center py-24 bg-linear-to-b from-[#f8f8f8] to-transparent'>
          <h2 className='font-volkhov text-5xl text-dark mb-5'>
            Follow Us On Instagram
          </h2>
          <p className='font-poppins max-w-153.75 text-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>
        <div className='mb-48.75 flex justify-center items-center'>
          <div>
            <img src={photo1} />
          </div>
          <div>
            <img src={photo2} />
          </div>
          <div>
            <img src={photo3} />
          </div>
          <div>
            <img src={photo4} />
          </div>
          <div>
            <img src={photo5} />
          </div>
          <div>
            <img src={photo6} />
          </div>
          <div>
            <img src={photo7} />
          </div>
        </div>
      </section>
    </div>
  );
}
