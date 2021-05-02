import React, { useEffect } from "react";

const Home = ({ children }) => {
  useEffect(() => {
    let userName = window.localStorage.getItem("user_name");
    $("#user_name").html(userName);

    toastr.options = {
      preventDuplicates: true,
      preventOpenDuplicates: true,
      positionClass: "toast-bottom-right",
    };

    $("#filter-groups").select2({
      placeholder: "-",
      width: "resolve",
    });
  }, []);

  return (
    <section id="dashboard">
      <div className="container-fluid display-table">
        <div className="row display-table-row">
        {children}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Home);
