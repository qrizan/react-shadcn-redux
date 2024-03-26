import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

export interface IPaginationNextPrevProps {
  loading: boolean,
  page: number,
  totalPages: number,
  previousPage: () => void,
  nextPage: () => void,
}
export function PaginationNextPrev(props : IPaginationNextPrevProps) {
  const { loading, page, totalPages, previousPage, nextPage} = props;

  return (
    <Pagination>
    <PaginationContent>
      {!loading && page > 1 && (
        <PaginationItem>
          <PaginationPrevious href="#" onClick={previousPage} />
        </PaginationItem>
      )}
      <PaginationItem>
        <PaginationLink href="#">{page} / {totalPages}</PaginationLink>
      </PaginationItem>
      {!loading && page < totalPages && (
        <PaginationItem>
          <PaginationNext href="#" onClick={nextPage} />
        </PaginationItem>
      )}
    </PaginationContent>
  </Pagination>
  )
}
