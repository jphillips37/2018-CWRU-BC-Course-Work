# NYT-Article-Search

NYT API Key: 8952bd6ffbfe461592bb8b3eab1ad43e

query parameters: 
q  string

Location: query ?q=xyz

Search query term. Search is performed on the article body, headline and byline.

fq  string

Location: query ?fq=xyz

"Filtered search query using standard Lucene syntax.

The filter query can be specified with or without a limiting field: label.

See Filtering Your Search for more information about filtering."

begin_date  string

Location: query ?begin_date=xyz

"Format: YYYYMMDD

Restricts responses to results with publication dates of the date specified or later."

end_date  string

Location: query ?end_date=xyz

"Format: YYYYMMDD

Restricts responses to results with publication dates of the date specified or earlier."

sort  string

Location: query ?sort=newest

"By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."

Allowed values are:

    newest
    oldest

fl  string

Location: query ?fl=xyz

"Comma-delimited list of fields (no limit)

Limits the fields returned in your search results. By default (unless you include an fl list in your request), the following fields are returned:

web_url

snippet

lead_paragraph

abstract

print_page

blog

source

multimedia

headline

keywords

pub_date

document_type

news_desk

byline

type_of_material

_id

word_count"

hl  boolean

Location: query ?hl=true

Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.

Note: If highlighting is enabled, snippet will be returned even if it is not specified in your fl list."

page  integer

Location: query ?page=123

"The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10."

facet_field  string

Location: query ?facet_field=xyz

Comma-delimited list of facets

Specifies the sets of facet values to include in the facets array at the end of response, which collects the facet values from all the search results. By default no facet fields will be returned. Below is the list of valid facets:

section_name

document_type

type_of_material

source

day_of_week

To learn more about using facets, see Using Facets.

facet_filter  boolean

Location: query ?facet_filter=true

When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.

Responses

200

The docs requested by the article search.
{
response:
{
docs:
[
{}
]
meta:
{
hits:
integer
time:
integer
offset:
integer
}
}
}
