import React from 'react';

function LoadingComponent() {
  return (
    <div className="d-flex justify-content-center">                  
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export {LoadingComponent};