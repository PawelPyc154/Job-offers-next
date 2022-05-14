import ReactPaginate from 'react-paginate'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'
import { Select } from '../form/select'
import { ButtonsWrapper } from '../form/buttonsWrapper'

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const pageCount = 5

  return (
    // const handlePageClick = (value: number) => {
    //   console.log(value)
    // }
    <ButtonsWrapper>
      {pageCount > 1 && (
        <ReactPaginate
          breakClassName="paginateBreakClassName"
          className="flex divide-x rounded-md select-none overflow-hidden divide-gray-200 h-10 child:bg-white child:hover:bg-gray-100 child:child:w-10 child:child:h-10 child:child:flex child:child:items-center child:child:justify-center"
          previousLabel={<MdKeyboardArrowLeft />}
          onPageChange={({ selected }) => setPageNumber(selected)}
          pageRangeDisplayed={pageNumber === 0 || pageCount - 1 === pageNumber ? 3 : 2}
          marginPagesDisplayed={0}
          forcePage={pageNumber}
          previousClassName={pageNumber === 0 ? 'paginateTransparent' : ''}
          nextClassName={pageCount - 1 === pageNumber ? 'paginateTransparent' : ''}
          pageCount={pageCount}
          nextLabel={<MdKeyboardArrowRight />}
          activeClassName="paginateActiveClassName"
        />
      )}
      <Select tw="hidden sm:flex" />
    </ButtonsWrapper>
  )
}

// const ReactPaginateStyled = styled(ReactPaginate)(() => [
//   css`
//     && .paginateActiveClassName {
//       background: ${theme('colors.emerald.600')};
//       color: white;
//       pointer-events: none;
//     }

//     && .paginateBreakClassName {
//       display: none;
//     }
//     && .paginateTransparent {
//       opacity: 0.5;
//       pointer-events: none;
//     }
//   `,
// ])

export { Pagination }
