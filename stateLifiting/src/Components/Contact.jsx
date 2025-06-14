import React from "react";

function Contact(props) {
  return (
    <div className="outline-2 p-4 mb-4 mt-4">
      <h2 className="mb-3 font-bold text-2xl">CONTACT</h2>
      <p>{props.active}</p>
      <p className={props.isActive ? "" : "hidden"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
        pariatur eveniet suscipit aliquid aut aspernatur, deserunt eum
        consectetur perspiciatis, nihil excepturi accusantium nemo quasi fugiat
        obcaecati autem. Aliquid, vitae. Adipisci asperiores impedit ipsum
        fugit, natus, incidunt corporis delectus temporibus veritatis, nobis
        placeat. Repellendus, sed officia tempore quae excepturi, enim veritatis
        hic est molestiae impedit quod deleniti quia tenetur rerum. Quaerat
        error iste, aliquid delectus nulla harum tenetur commodi porro facere ad
        iusto quas veritatis vitae soluta, maxime laboriosam ipsam reprehenderit
        ab nam amet hic officiis, mollitia earum animi! Expedita! Dicta fugiat
        minus, non pariatur ducimus qui quo fugit quod molestias ratione
        repellat similique iusto voluptas vero, possimus, itaque hic porro
        magni? Corporis voluptatum, quos distinctio non numquam dolorem
        voluptas.
      </p>
      <button onClick={props.onShow}>SHOW</button>
    </div>
  );
}

export default Contact;
